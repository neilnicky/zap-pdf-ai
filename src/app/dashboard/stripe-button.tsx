'use client'

import { useFormStatus } from 'react-dom'
import { createSubscription } from './stripe-checkout-session'
import { Button } from '@/src/components/ui/button'

export function StripeButton() {
  const { pending } = useFormStatus()

  return (
    <form action={createSubscription}>
      <Button 
        type="submit" 
        disabled={pending}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        {pending ? 'Processing...' : 'Subscribe Now'}
      </Button>
    </form>
  )
}