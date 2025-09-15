import React from "react";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Pink Section */}
            <div className="bg-pink-200 h-1/4 flex flex-col items-center justify-center">
                {/* ✅ Updated Header */}
                <h1 className="text-3xl font-bold">
                    <span className="text-black">Meet My</span>
                    <span className="text-pink-600">sore</span>
                </h1>
                <p className="text-sm italic font-serif">
                    <span className="text-black">meet my</span>
                    <span className="text-pink-600">soul</span>
                </p>
            </div>

            {/* Bottom White Section */}
            <div className="bg-white h-3/4 p-10 text-center overflow-y-auto">
                <div className="max-w-3xl mx-auto space-y-10">
                    {/* First Paragraph */}
                    <div className="text-lg leading-relaxed text-gray-800 font-serif">
                        <p>
                            Welcome to Meet Mysore! 💖
                            <br />
                            Your space to connect, share, and create real friendships in Mysore.
                            <br />
                            <br />
                            Here, strangers become friends over conversations, meetups, and weekend hangouts. 🌸
                            <br />
                            <br />
                            ✨ Discover new people from your city
                            <br />
                            ✨ Plan or join weekend meetups
                            <br />
                            ✨ Build lasting connections
                            <br />
                            <br />
                            Let’s make Mysore a little friendlier—one soul at a time. 🌟
                        </p>
                    </div>

                    {/* Second Paragraph */}
                    <div className="text-lg leading-relaxed text-gray-800 font-serif">
                        <p>
                            🌟 <strong>How It Works at Meet Mysore</strong> 🌟
                            <br />
                            <br />
                            Hey there, welcome aboard! 💖 You’ve taken the first step towards making new friends in Mysore, and
                            we’re so excited to have you with us.
                            <br />
                            <br />
                            Here’s the plan: once you’ve registered, just sit back and relax while we gather a group. We believe
                            that the more, the merrier — so we wait until 30 amazing people have signed up. This way, everyone gets
                            to meet a good mix of new faces and create real connections.
                            <br />
                            <br />
                            As soon as the group is ready, you’ll receive an email with all the meetup details — the date, time,
                            and location. No need to worry about missing out, we’ll keep you updated every step of the way.
                            <br />
                            <br />
                            In the meantime, think of it as the calm before the fun storm 🌸. Soon enough, you’ll be laughing,
                            sharing stories, and building friendships that could last a lifetime.
                            <br />
                            <br />
                            Thanks for being patient and trusting the process. Great things take a little time, and we promise
                            it’ll be worth the wait. ✨
                            <br />
                            <br />
                            Let’s make Mysore a friendlier place — one weekend, one soul, one smile at a time. 💌
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
