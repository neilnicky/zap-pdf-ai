import { ButtonHTMLAttributes } from 'react'

interface SubscriptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onSubscribe: () => void
}

export default function SubscriptionButton({ onSubscribe, ...props }: SubscriptionButtonProps) {
  return (
    <button
      onClick={onSubscribe}
      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      {...props}
    >
      Subscribe Now (Dummy)
    </button>
  )
}