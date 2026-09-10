import { Header, Sidebar } from "../../index";

function Friends() {
    return (
        <div className="min-h-screen w-full bg-[#08090D] text-[#F5F5F5]">

            <Header />

            <div className="flex h-[calc(100vh-56px)]">

                <Sidebar />

                <main className="flex-1 overflow-y-auto p-6">

                    {/* Page Header */}
                    <div className="border-b border-[#262936] pb-5">
                        <h1 className="text-2xl font-semibold">
                            Friends
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Connect with developers and collaborate together.
                        </p>
                    </div>


                    {/* Main Content */}
                    <div className="mt-6 grid grid-cols-[65%_35%] gap-5">

                        {/* Friends */}
                        <div className="rounded-2xl border border-[#262936] bg-[#0F172A] p-5">

                            <div className="flex items-center justify-between border-b border-[#262936] pb-4">
                                <h2 className="text-lg font-semibold text-white">
                                    Your Friends
                                </h2>

                                <div className="flex items-center gap-3">
                                    <button className="text-xs text-[#A78BFA] transition hover:text-white">
                                        Show All
                                    </button>

                                </div>
                            </div>

                            <div className="mt-3">

                                {/* Friend 1 */}
                                <div className="flex items-center justify-between border-b border-[#262936] py-3">

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#262936] bg-[#17112B]">
                                            <i className="fa-brands fa-google text-sm text-white"></i>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium text-white">
                                                Rahul
                                            </h3>

                                            <p className="text-xs text-gray-500">
                                                Google
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="rounded-lg border border-[#262936] px-3 py-1.5 text-xs text-gray-400 hover:bg-[#151821] hover:text-white">
                                            <i className="fa-solid fa-message mr-2"></i>
                                            Message
                                        </button>

                                        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#262936] text-gray-400 hover:bg-[#151821] hover:text-white">
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="rounded-2xl border border-[#262936] bg-[#0F172A] p-5">

                            <div className="flex items-center justify-between border-b border-[#262936] pb-4">
                                <h2 className="text-lg font-semibold text-white">
                                    Your Friends
                                </h2>

                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-gray-500">
                                        12 Friends
                                    </span>

                                    <button className="text-xs text-[#A78BFA] transition hover:text-white">
                                        Show All
                                    </button>
                                </div>
                            </div>


                            {/* Search */}
                            <div className="mt-4 flex gap-2">

                                <div className="relative flex-1">
                                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"></i>

                                    <input
                                        type="text"
                                        placeholder="Search friends..."
                                        className="w-full rounded-lg border border-[#262936] bg-[#08090D] py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#7C3AED]"
                                    />
                                </div>

                                <button className="rounded-lg bg-[#7C3AED] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#8B5CF6]">
                                    Search
                                </button>

                            </div>


                            {/* Friends List */}
                            <div className="mt-3">

                                <div className="flex items-center justify-between border-b border-[#262936] py-3">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#262936] bg-[#17112B]">
                                            <i className="fa-brands fa-google text-sm text-white"></i>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium text-white">
                                                Arjun
                                            </h3>

                                            <p className="text-xs text-gray-500">
                                                Google
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </main>

            </div>

        </div>
    );
}

export default Friends;