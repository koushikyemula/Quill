import { getUser } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import { ToggleCard } from "./_components/toggle-card";

const ChatPage = async () => {
  const currentUser = await getUser();
  const stream = await getStreamByUserId(currentUser.id);

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Chat settings</h1>
      </div>
      <div className="space-y-4">
        <ToggleCard field="isChatEnabled" label="Enable chat" value={stream.isChatEnabled} />
        <ToggleCard field="isChatDelayed" label="Delay chat" value={stream.isChatDelayed} />
        <ToggleCard
          field="isChatFollowersOnly"
          label="Followers only chat"
          value={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};

export default ChatPage;
