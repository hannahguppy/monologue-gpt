import { ExistingChatLink } from './ExistingChatLink'
import { NewChatLink } from './NewChatLink'
import { SidebarButtons } from './SidebarButtons'

export const FullSidebar = () => {
  return (
    <div class="dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
      <div class="flex h-full min-h-0 flex-col">
        <div class="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
          <nav class="flex h-full flex-1 flex-col space-y-1 p-2">
            <NewChatLink />

            <div class="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
              <div class="flex flex-col gap-2 text-gray-100 text-sm">
                <ExistingChatLink />
              </div>
            </div>

            <SidebarButtons />
          </nav>
        </div>
      </div>
    </div>
  )
}
