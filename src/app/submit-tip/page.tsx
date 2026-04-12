'use client';

import { motion } from 'framer-motion';

export default function SubmitTipPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-[calc(70px+4rem)] pb-8 text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Submit Anonymous Tip</h1>
          <p className="text-[var(--text-muted)] uppercase tracking-widest text-sm">Secure chat via Telegram. No registration needed.</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-8">
          {/* Intro */}
          <motion.div
            className="text-center mb-8 p-10 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-[var(--accent)] text-2xl mb-4">🔒 Anonymous Tip Line</h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-6">
              Click the button below to open a secure chat with our bot. No login required. Your identity is completely protected.
            </p>
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/15 border border-[var(--accent)] rounded-full px-6 py-3 text-sm text-[var(--accent)]">
              <span>🔐</span>
              <span>100% Anonymity Guaranteed</span>
            </div>

            <div className="flex justify-center gap-8 flex-wrap mt-6 text-sm text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🎭</span>
                <span>No phone/email required</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📎</span>
                <span>Photos & documents</span>
              </div>
            </div>
          </motion.div>

          {/* Telegram Bot CTA */}
          <motion.div
            className="bg-[var(--bg-secondary)] border border-white/10 rounded-2xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-gradient-to-r from-[#0088cc] to-[#00a8e8] p-6 text-center">
              <div className="text-5xl mb-2">✈️</div>
              <h3 className="text-white text-xl mb-1">@thomasteranontipsbot</h3>
              <p className="text-white/80 text-sm">Click below to start chatting instantly</p>
            </div>

            <div className="p-8 text-center">
              <div className="bg-[var(--bg-tertiary)] rounded-xl p-6 mb-6 text-left">
                <ol className="list-decimal list-inside space-y-3 text-[var(--text-secondary)]">
                  <li>Click <strong className="text-[var(--accent)]">&quot;Open Chat&quot;</strong> below</li>
                  <li>Type <strong className="text-[var(--accent)]">/start</strong> and send it</li>
                  <li>Receive welcome message</li>
                  <li>Send your tip — any text, photos, or files</li>
                  <li>Receive confirmation with tip ID</li>
                </ol>
              </div>

              <div className="mb-6">
                <a
                  href="https://t.me/thomasteranontipsbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#0088cc] text-white rounded-xl no-underline font-semibold text-lg transition-all hover:bg-[#0099e6] hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(0,136,204,0.3)]"
                >
                  <span className="text-2xl">✈️</span>
                  <span>Open Secure Chat →</span>
                </a>
              </div>

              <p className="text-[var(--text-muted)] text-sm mb-6">
                Opens in Telegram Web (no app required) or Telegram app
              </p>

              {/* Preview */}
              <div className="bg-white rounded-xl p-6 text-left shadow-lg">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200 mb-4">
                  <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center text-2xl">
                    ✈️
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">Thom Aster Tips Bot</h4>
                    <p className="text-gray-500 text-sm">@thomasteranontipsbot</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-800 text-sm">
                      👋 <strong>Welcome to Thom Aster&apos;s Anonymous Tips Bot</strong><br/>
                      🔒 <strong>100% Anonymity Guaranteed</strong><br/>
                      If you have a tip, document, or file you&apos;d like to share, just post it below and I&apos;ll take a look.<br/>
                      ✅ Your identity is never revealed<br/>
                      ✅ No logs kept<br/>
                      ✅ End-to-end encrypted
                    </p>
                    <p className="text-gray-400 text-xs mt-2">Bot • just now</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-800 text-sm">
                      ✅ <strong>Tip Received!</strong><br/>
                      <strong>ID:</strong> ABC12345<br/>
                      Thank you for your submission. Your anonymity is guaranteed.<br/>
                      If this leads to a published investigation, your contribution will be acknowledged privately (if you wish) or kept completely anonymous.<br/>
                      <strong>Goodbye, and stay safe. 🔒</strong>
                    </p>
                    <p className="text-gray-400 text-xs mt-2">Bot • just now</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alternative Methods */}
          <motion.div
            className="bg-[var(--bg-secondary)] border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[var(--text-secondary)] text-center mb-4">Alternative Secure Methods</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[var(--bg-tertiary)] rounded-lg p-4 text-center">
                <h5 className="text-[var(--accent)] mb-1">🌐 Tor Browser</h5>
                <p className="text-[var(--text-muted)] text-xs mb-3">Maximum anonymity via Tor network</p>
                <a
                  href="https://www.torproject.org/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] no-underline text-sm hover:underline"
                >
                  Download →
                </a>
              </div>
              <div className="bg-[var(--bg-tertiary)] rounded-lg p-4 text-center">
                <h5 className="text-[var(--accent)] mb-1">📧 Encrypted Email</h5>
                <p className="text-[var(--text-muted)] text-xs mb-3">Send to thomaster.journo@gmail.com</p>
                <a
                  href="https://proton.me/mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] no-underline text-sm hover:underline"
                >
                  Create ProtonMail →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}