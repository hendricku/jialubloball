import { motion, AnimatePresence } from 'framer-motion';

interface ShareTestimonyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareTestimonyModal({ isOpen, onClose }: ShareTestimonyModalProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailSubject = "New Testimony Submission";
    const emailBody = `
Title of Testimony:
[Please write your testimony title here]

Name:
[Please write your name here]

Testimony:
[Please share your testimony here. You may include:
- How God worked in your situation
- What you learned from this experience
- How this experience strengthened your faith]
    `.trim();

    // Using mailto protocol instead of Gmail URL
    const mailtoLink = `mailto:hendrickcastro017@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-x-0 mx-auto top-1/2 -translate-y-1/2 w-full max-w-lg p-6 z-50"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Share Your Testimony</h2>
              
              {/* Added Guidelines Section */}
              <div className="mb-8 p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold mb-2">Guidelines for Sharing:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Title of your testimony</li>
                  <li>• Your full name</li>
                  <li>• Your detailed testimony</li>
                  <li>• How God worked in your situation</li>
                  <li>• What you learned from this experience</li>
                </ul>
              </div>

              <p className="text-gray-600 mb-8 text-center">
                Choose how you&apos;d like to share your testimony:
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleEmailClick}
                  className="w-full flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="text-2xl">📧</div>
                  <div className="text-left">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-600">hendrickcastro017@gmail.com</p>
                  </div>
                </button>
                
                <a 
                  href="https://www.facebook.com/jiac.launion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold">Facebook</h3>
                    <p className="text-sm text-gray-600">Jesus Is Alive Church La Union</p>
                  </div>
                </a>
              </div>

              <button
                onClick={onClose}
                className="mt-8 w-full px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}