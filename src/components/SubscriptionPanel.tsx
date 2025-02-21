
interface SubscriptionPanelProps {
  onSubscribe: () => void
}

export default function SubscriptionPanel({ onSubscribe }: SubscriptionPanelProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-200 mb-2">
        Unlock PDF Analysis
      </h2>
      <p className="text-gray-400 mb-4">
        Subscribe to access advanced PDF processing features
      </p>
      <button
        onClick={onSubscribe}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
      >
        Subscribe Now
      </button>
    </div>
  )
}