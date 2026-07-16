/* ============================================
   AUTH — Supabase-based Real Authentication
   Nidaamkan wuxuu si dhab ah u kala saarayaa 
   users-ka iyo cashiradooda asagoo isticmaalaya Cloud.
   ============================================ */

// ⚠️ KU BEDDEL URL-kaaga iyo Key-gaaga rasmiga ah ee Supabase (Hubi in Key-gu ku bilaawdo eyJ...)
// URL-ka iyo Key-ga saxda ah ee laga soo minguuriyay sawiradaada
const SUPABASE_URL = "https://yfrkofnjxhuujcnwqlez.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xz0lyL5QekcPYbRNLX37HQ_u5bHoVC4";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.LinguaAuth = {
  
  // 1. DIIWAANGELIN CUSUB (Sign Up)
  async signup(name, email, password) {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name.trim()
          }
        }
      });

      if (error) return { ok: false, error: error.message };

      // 🔥 BILOWGA PROGRESS-KA CUSUB:
      // Marka uu qofku xisaab cusub furto, waxaan si toos ah ugu dhex abuuraynaa jadwalka progress-ka row-giisa ugu horreeya
      if (data.user) {
        await supabaseClient
          .from('progress')
          .insert({
            user_id: data.user.id,
            xp: 0,
            completed_lessons: [],
            updated_at: new Date().toISOString()
          });
      }

      return { ok: true, user: data.user };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  },

  // 2. SOO GALID (Log In) — Kani wuxuu abuurayaa session ammaan ah
  async login(email, password) {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) return { ok: false, error: error.message };
      return { ok: true, user: data.user };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  },

  // 3. KA BIXID (Log Out)
  async logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'auth.html';
  },

  // 4. HUBI HADDI UU QOF HADDA LOG IN YAHAY
  async isLoggedIn() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session !== null;
  },

  // 5. SOO QAAD XOGTA IYO CASHIRADA USER-KA HADDA FADHIYA
  async currentUser() {
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (!user) return null;

      // Waxaan weydiisanaynaa database-ka cashirada iyo dhibcaha qofkan oo kaliya
      const { data: progressData } = await supabaseClient
        .from('progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle(); // Waxaan u beddelay maybeSingle() si aanu koodhku u jabin haddii safku maqan yahay

      return {
        id: user.id,
        name: user.user_metadata?.name || 'Learner',
        email: user.email,
        avatar: user.user_metadata?.avatar_url || null, // Diyaarinta haddii aad dhowaan ku darto sawirka profile-ka
        progress: progressData || { level: 'A1', xp: 0, completed_lessons: [] }
      };
    } catch (e) {
      console.error("Error fetching current user:", e);
      return null;
    }
  },

  // 6. CUSBOONAYSIINTA CASHIRADA IYO DHIBCAHA (Save Progress)
  async updateProgress(xpAmount, completedLessonsArray) {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return null;

    // Waxay si toos ah ugu kaydinaysaa database-ka dhexdiisa xogta qofkan u gaarka ah
    const { data, error } = await supabaseClient
      .from('progress')
      .upsert({
        user_id: user.id,
        xp: xpAmount,
        completed_lessons: completedLessonsArray,
        updated_at: new Date().toISOString()
      })
      .select()
      .maybeSingle();

    if (error) console.error("Error saving progress:", error.message);
    return data;
  }
};