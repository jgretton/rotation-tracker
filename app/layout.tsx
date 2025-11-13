import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Rotation Tracker",
	description: "App for tracking volleyball rotations.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>
				<header className="max-w-7xl mx-auto p-4">
					<nav className="flex gap-10">
						<Link href={"/"}>Basic Rotation Tracker</Link>
						<Link href={"/advanced"}>Advanced Rotation Tracker</Link>
					</nav>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
