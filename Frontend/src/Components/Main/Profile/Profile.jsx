import {Header,Sidebar} from "../../index"

function Profile() {
    return (
        <div className="min-h-screen w-full bg-[#08090D] text-[#F5F5F5]">

            <Header />

            <div className="flex h-[calc(100vh-56px)]">

                <Sidebar />

                <main className="flex-1 overflow-y-auto">

                    {/* Profile Header */}
                    <div className="grid grid-cols-2 border-b border-[#262936] px-8 py-6">

                        {/* Left - Profile */}
                        <div className="flex items-center gap-6">

                            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-[#7C3AED] bg-[#17112B]">
                                <span className="text-3xl font-semibold text-white">
                                    TP
                                </span>
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold">
                                    Tushar Panwar
                                </h1>

                                <span className="mt-1 inline-block rounded-full bg-[#7C3AED]/15 px-3 py-1 text-xs text-[#A78BFA]">
                                    Developer
                                </span>

                                <p className="mt-2 max-w-md text-sm text-gray-400">
                                    Passionate about building, learning, and collaborating.
                                    <br />
                                    Always curious, always coding. 🚀
                                </p>

                                <div className="mt-3 flex items-center gap-5 text-xs text-gray-500">

                                    <span>
                                        <i className="fa-solid fa-location-dot mr-2"></i>
                                        India
                                    </span>

                                    <span>
                                        <i className="fa-regular fa-calendar mr-2"></i>
                                        Joined Aug 2025
                                    </span>

                                </div>
                            </div>

                        </div>


                        {/* Right - Stats */}
                        <div className="grid grid-cols-2 items-center">

                            {/* Rooms Joined */}
                            <div className="flex items-center gap-4 border-r border-[#262936] px-8">

                                <i className="fa-solid fa-users text-xl text-[#A78BFA]"></i>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        12
                                    </h2>

                                    <p className="text-xs text-gray-500">
                                        Rooms Joined
                                    </p>
                                </div>

                            </div>


                            {/* Projects */}
                            <div className="flex items-center gap-4 px-8">

                                <i className="fa-regular fa-folder text-xl text-[#A78BFA]"></i>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        5
                                    </h2>

                                    <p className="text-xs text-gray-500">
                                        Projects
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Profile Content */}
                    <div className="grid grid-cols-[60%_40%] items-start gap-5 p-6">

                        {/* LEFT - 60% */}
                        <div className="rounded-2xl border border-[#262936] bg-[#0F172A]">


                            {/* About Me */}
                            <div className="border-b border-[#262936] p-4">

                                <div className="flex items-center justify-between">

                                    <h2 className="text-lg font-semibold text-white">
                                        About Me
                                    </h2>

                                    <button className="flex items-center gap-2 rounded-lg border border-[#262936] px-3 py-1.5 text-sm text-gray-400 transition hover:bg-[#151821] hover:text-white">

                                        <i className="fa-solid fa-pen text-xs"></i>

                                        Edit

                                    </button>

                                </div>


                                <p className="mt-2 text-sm leading-6 text-gray-400">
                                    Passionate about building, learning, and collaborating.
                                    Always curious, always coding. 🚀
                                </p>

                            </div>


                            {/* Skills */}
                            <div className="p-4">

                                <div className="flex items-center justify-between">

                                    <h2 className="text-lg font-semibold text-white">
                                        Skills
                                    </h2>

                                    <button className="flex items-center gap-2 rounded-lg border border-[#262936] px-3 py-1.5 text-sm text-gray-400 transition hover:bg-[#151821] hover:text-white">

                                        <i className="fa-solid fa-pen text-xs"></i>

                                        Edit

                                    </button>

                                </div>


                                <div className="mt-3 flex flex-wrap gap-2">

                                    <span className="rounded-lg bg-[#7C3AED]/15 px-3 py-1.5 text-sm text-[#A78BFA]">
                                        React
                                    </span>

                                    <span className="rounded-lg bg-[#7C3AED]/15 px-3 py-1.5 text-sm text-[#A78BFA]">
                                        Node.js
                                    </span>

                                    <span className="rounded-lg bg-[#7C3AED]/15 px-3 py-1.5 text-sm text-[#A78BFA]">
                                        MongoDB
                                    </span>

                                    <span className="rounded-lg bg-[#7C3AED]/15 px-3 py-1.5 text-sm text-[#A78BFA]">
                                        Express
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* RIGHT - 40% */}
                        <div className="rounded-2xl border border-[#262936] bg-[#0F172A] p-4">


                            {/* Top Languages */}
                            <div className="border-b border-[#262936] pb-4">

                                <h2 className="flex items-center gap-3 text-lg font-semibold text-white">

                                    <i className="fa-solid fa-chart-simple text-[#A78BFA]"></i>

                                    Top Languages

                                </h2>


                                <div className="mt-4 space-y-3">

                                    {/* JavaScript */}
                                    <div className="flex items-center gap-3">

                                        <i className="fa-brands fa-js text-yellow-400"></i>

                                        <span className="w-20 text-sm text-gray-300">
                                            JavaScript
                                        </span>

                                        <div className="h-1.5 flex-1 rounded-full bg-[#1E293B]">

                                            <div className="h-1.5 w-[35%] rounded-full bg-[#7C3AED]"></div>

                                        </div>

                                        <span className="text-xs text-gray-400">
                                            35%
                                        </span>

                                    </div>


                                    {/* Python */}
                                    <div className="flex items-center gap-3">

                                        <i className="fa-brands fa-python text-blue-400"></i>

                                        <span className="w-20 text-sm text-gray-300">
                                            Python
                                        </span>

                                        <div className="h-1.5 flex-1 rounded-full bg-[#1E293B]">

                                            <div className="h-1.5 w-[20%] rounded-full bg-[#7C3AED]"></div>

                                        </div>

                                        <span className="text-xs text-gray-400">
                                            20%
                                        </span>

                                    </div>


                                    {/* Java */}
                                    <div className="flex items-center gap-3">

                                        <i className="fa-brands fa-java text-red-400"></i>

                                        <span className="w-20 text-sm text-gray-300">
                                            Java
                                        </span>

                                        <div className="h-1.5 flex-1 rounded-full bg-[#1E293B]">

                                            <div className="h-1.5 w-[15%] rounded-full bg-[#7C3AED]"></div>

                                        </div>

                                        <span className="text-xs text-gray-400">
                                            15%
                                        </span>

                                    </div>


                                    {/* HTML */}
                                    <div className="flex items-center gap-3">

                                        <i className="fa-brands fa-html5 text-orange-500"></i>

                                        <span className="w-20 text-sm text-gray-300">
                                            HTML
                                        </span>

                                        <div className="h-1.5 flex-1 rounded-full bg-[#1E293B]">

                                            <div className="h-1.5 w-[10%] rounded-full bg-[#7C3AED]"></div>

                                        </div>

                                        <span className="text-xs text-gray-400">
                                            10%
                                        </span>

                                    </div>


                                    {/* CSS */}
                                    <div className="flex items-center gap-3">

                                        <i className="fa-brands fa-css3-alt text-blue-500"></i>

                                        <span className="w-20 text-sm text-gray-300">
                                            CSS
                                        </span>

                                        <div className="h-1.5 flex-1 rounded-full bg-[#1E293B]">

                                            <div className="h-1.5 w-[10%] rounded-full bg-[#7C3AED]"></div>

                                        </div>

                                        <span className="text-xs text-gray-400">
                                            10%
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* Connect */}
                            <div className="pt-4">

                                <h2 className="flex items-center gap-3 text-lg font-semibold text-white">

                                    <i className="fa-solid fa-link text-[#A78BFA]"></i>

                                    Connect

                                </h2>


                                <div className="mt-4 flex gap-3">

                                    {/* GitHub */}
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#262936] text-gray-300 transition hover:bg-[#151821] hover:text-white">

                                        <i className="fa-brands fa-github"></i>

                                    </button>


                                    {/* LinkedIn */}
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#262936] text-gray-300 transition hover:bg-[#151821] hover:text-white">

                                        <i className="fa-brands fa-linkedin-in"></i>

                                    </button>


                                    {/* X */}
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#262936] text-gray-300 transition hover:bg-[#151821] hover:text-white">

                                        <i className="fa-brands fa-x-twitter"></i>

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

export default Profile;