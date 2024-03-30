import { Button } from './components/ui/button'

export function App() {
  return (
    <main className='w-full h-full bg-black flex flex-col items-center justify-center'>
      <a
        href='https://github.com/marcos-venicius'
        className='block'
        target='_blank'
        rel='noopener noreferrer'>
        <img src='/m.png' className='max-w-[512px] max-h-[512px] animate-pulse rounded-full' />
      </a>

      <Button asChild>
        <a href='https://ui.shadcn.com/docs' target='_blank' rel='noopener noreferrer'>
          View shadcn docs
        </a>
      </Button>
    </main>
  )
}
