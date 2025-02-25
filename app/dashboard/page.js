import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession();
    if (!session) {
        redirect('/');
    }
    return (
        <div class="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 class="text-green-400 border p-4">
                User successfully logged in, here you can put anything you want.
            </h1>
        </div>
    );
}