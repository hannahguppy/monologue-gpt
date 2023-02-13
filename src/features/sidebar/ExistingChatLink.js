export const ExistingChatLink = () => {
  const chat_title = 'Untitled'
  
  return (
    <a class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group">
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>

      <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
        {chat_title}
        <div class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"></div>
      </div>
    </a>
  )
}
