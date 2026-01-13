const intros = [
  "Sorry, I can't make it because",
  'Unfortunately, I have to cancel because',
  "I won't be able to attend because",
  'Something came up:',
  'I need to reschedule because',
]

const subjects = [
  'my cat',
  'my neighbor',
  'my dentist',
  'a mysterious stranger',
  'my third cousin twice removed',
  'my houseplant',
  'my imaginary friend',
  'a delivery person',
]

const actions = [
  'needs my help with',
  'accidentally started',
  'is demanding I fix',
  'spontaneously initiated',
  'required my presence for',
  'urgently needs assistance with',
]

const events = [
  'an emergency interpretive dance performance',
  'a surprise llama parade',
  'a critically important nap',
  'a philosophical debate with a squirrel',
  'an urgent cheese-tasting competition',
  'a last-minute yoga session for beginners',
  'an unexpected sock puppet theater rehearsal',
  'a mandatory cloud-watching appointment',
]

function randomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function generateExcuse(): string {
  const intro = randomElement(intros)
  const subject = randomElement(subjects)
  const action = randomElement(actions)
  const event = randomElement(events)

  return `${intro} ${subject} ${action} ${event}.`
}
