import { Header, Sidebar,image} from "../../index";
function Dashboard() {


  return (
    <div className="min-h-screen w-full bg-[#08090D] text-[#F5F5F5]">
      <Header />

      <div className="flex min-h-[calc(100vh-56px)]">

        {/* Sidebar */}
        <Sidebar />
        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="w-full h-[20%] min-h-[150px] rounded-2xl border border-[#262936] bg-[#0F172A] p-5 flex items-center justify-between overflow-hidden">

            {/* Left Content */}
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome back, Tushar! 👋
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Ready to code something amazing today?
              </p>

              <div className="flex gap-3 mt-5">
                <button className="rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#8B5CF6] transition">
                  Create Room
                </button>

                <button className="rounded-lg border border-[#262936] px-5 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#151821] hover:text-white transition">
                  Explore Rooms
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full w-[455px] shrink-0">
              <img
                src={image}
                alt="Developer coding"
                className="h-full w-full object-cover object-right"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent"></div>
            </div>

          </div>
          <div className="mt-6 rounded-2xl border border-[#262936] bg-[#0F172A] p-5">

            <div className="grid grid-cols-3">

              {/* Messages */}
              <div className="border-r border-[#262936] px-3">
                <h2 className="border-b border-[#262936] pb-4 text-lg font-semibold text-white">
                  Messages
                </h2>

                <div className="mt-4 space-y-3">

                  {/* Message 1 */}
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#151821]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]">
                      <i className="fa-solid fa-user text-sm text-white"></i>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-white">
                        Rahul
                      </h3>
                      <p className="truncate text-xs text-gray-500">
                        Hey, are you free to join the room?
                      </p>
                    </div>
                  </div>

                  {/* Message 2 */}
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#151821]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]">
                      <i className="fa-solid fa-user text-sm text-white"></i>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-white">
                        Aman
                      </h3>
                      <p className="truncate text-xs text-gray-500">
                        I pushed the latest changes.
                      </p>
                    </div>
                  </div>

                  {/* Message 3 */}
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#151821]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]">
                      <i className="fa-solid fa-user text-sm text-white"></i>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-white">
                        Priya
                      </h3>
                      <p className="truncate text-xs text-gray-500">
                        Let's work on the project together.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Continue Coding */}
              {/* Continue Coding */}
              <div className="border-r border-[#262936] px-5">
                <h2 className="border-b border-[#262936] pb-4 text-lg font-semibold text-white">
                  Continue Coding
                </h2>

                <div className="mt-4 space-y-3">

                  {/* Room 1 */}
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#151821]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/15">
                      <i className="fa-solid fa-code text-sm text-[#A78BFA]"></i>
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium text-white">
                        MERN Project
                      </h3>
                      <p className="text-xs text-gray-500">
                        3 members
                      </p>
                    </div>
                  </div>

                  {/* Room 2 */}
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#151821]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/15">
                      <i className="fa-solid fa-code text-sm text-[#A78BFA]"></i>
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium text-white">
                        CodeCollab Backend
                      </h3>
                      <p className="text-xs text-gray-500">
                        5 members
                      </p>
                    </div>
                  </div>

                  {/* Room 3 */}
                  <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-[#151821]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/15">
                      <i className="fa-solid fa-code text-sm text-[#A78BFA]"></i>
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium text-white">
                        AI Chat App
                      </h3>
                      <p className="text-xs text-gray-500">
                        2 members
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-5">
                <h2 className="border-b border-[#262936] pb-4 text-lg font-semibold text-white">
                  Quick Actions
                </h2>
                <div className="mt-4 space-y-2">
                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 transition hover:bg-[#151821] hover:text-white">
                    <i className="fa-solid fa-user-plus w-5 text-center"></i>
                    <span>Add Friend</span>
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 transition hover:bg-[#151821] hover:text-white">
                    <i className="fa-solid fa-users w-5 text-center"></i>
                    <span>My Rooms</span>
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 transition hover:bg-[#151821] hover:text-white">
                    <i className="fa-solid fa-plus w-5 text-center"></i>
                    <span>Create Room</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Dashboard
