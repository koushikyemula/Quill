import { getUser } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import { ConnectModal } from "./_components/connect-modal";
import { KeyCard } from "./_components/key-card";
import { UrlCard } from "./_components/url-card";

const KeysPage = async () => {
  const currentUser = await getUser();
  const stream = await getStreamByUserId(currentUser.id);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        <ConnectModal />
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default KeysPage;
