import { createClient } from '@supabase/supabase-js'

export async function POST(request) {
  try {
    const { email } = await request.json()
    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 })
    }
    // If Supabase env vars are present, insert into the waitlist table.  The
    // service role key allows row level security policies to be bypassed.
    const SUPABASE_URL = process.env.SUPABASE_URL
    const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
    if (SUPABASE_URL && (SUPABASE_SERVICE_ROLE || SUPABASE_ANON_KEY)) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE || SUPABASE_ANON_KEY, {
        auth: { persistSession: false },
      })
      const { error } = await supabase.from('waitlist').insert({
        email,
        source: 'waitlist',
        user_agent: request.headers.get('user-agent') || null,
      })
      if (error) {
        console.error('Supabase insert error:', error)
        // Fall through to success, but log error.  We don\'t want to leak errors to users.
      }
    } else {
      // Without Supabase keys we still return success so the UI can proceed.  In
      // development you’ll see the email logged to the console for testing.
      console.log('Received waitlist email:', email)
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
  }
}
