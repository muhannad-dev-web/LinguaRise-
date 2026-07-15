/* ============================================
   CERTIFICATE — PDF generation (jsPDF) + WhatsApp share
   ============================================ */

window.LinguaCertificate = (function () {
  const WHATSAPP_NUMBER = '252687031851';

  const SECTION_LABELS = {
    reading: 'Reading',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    listening: 'Listening',
    speaking: 'Speaking'
  };

  function loadJsPDF() {
    return new Promise((resolve, reject) => {
      if (window.jspdf) return resolve(window.jspdf);
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = () => resolve(window.jspdf);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function getSummary(sectionKey) {
    const user = window.LinguaAuth.currentUser();
    const progress = window.LinguaProgress.getSection(sectionKey);
    const scores = Object.values(progress).map((l) => l.score);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    return {
      name: user?.name || 'LinguaRise Student',
      section: SECTION_LABELS[sectionKey] || sectionKey,
      avg,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    };
  }

  async function generate(sectionKey) {
    const { jsPDF } = await loadJsPDF();
    const s = getSummary(sectionKey);
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, 297, 210, 'F');
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(12, 12, 273, 186, 4, 4, 'F');

    doc.setTextColor(37, 99, 235);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.text('LinguaRise', 148.5, 40, { align: 'center' });

    doc.setTextColor(30, 41, 59);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Certificate of Completion', 148.5, 55, { align: 'center' });

    doc.setFontSize(11);
    doc.text('This certifies that', 148.5, 80, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.text(s.name, 148.5, 96, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(13);
    doc.text(`has successfully completed the ${s.section} module`, 148.5, 112, { align: 'center' });
    doc.text(`with an average quiz score of ${s.avg}%`, 148.5, 122, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text(`Issued on ${s.date}`, 148.5, 160, { align: 'center' });
    doc.text('LinguaRise — Learn • Speak • Grow', 148.5, 168, { align: 'center' });

    doc.save(`LinguaRise-${s.section}-Certificate.pdf`);
    window.showToast?.('Shahaadada waa la soo dejiyay ✅');
    return s;
  }

  function shareWhatsApp(sectionKey) {
    const s = getSummary(sectionKey);
    const message = `🎓 LinguaRise Certificate\n\nName: ${s.name}\nModule: ${s.section}\nAverage Score: ${s.avg}%\nDate: ${s.date}\n\nI just completed the ${s.section} module on LinguaRise!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return { generate, shareWhatsApp };
})();
