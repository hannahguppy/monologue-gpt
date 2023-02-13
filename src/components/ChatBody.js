import { Footer } from '../features/input-footer/Footer'
import { InputForm } from '../features/input-footer/InputForm'
import { NewChatIntro } from './NewChatIntro'
import { Sidebar } from '../features/sidebar/Sidebar'

export const ChatBody = () => {
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div className="flex h-full flex-1 flex-col md:pl-[260px]">
        <Sidebar />
        <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
          <div className="flex-1 overflow-hidden">
            <div className="react-scroll-to-bottom--css-lryqn-79elbk h-full dark:bg-gray-800">
              <div className="react-scroll-to-bottom--css-lryqn-1n7m0yu">
                <div className="flex flex-col items-center text-sm h-full dark:bg-gray-800">
                  <NewChatIntro />
                  <div className="w-full h-32 md:h-48 flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
            <InputForm />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
