'use client'
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

type Props = {};

function Room({ params }: any) {
  const roomID = params.roomid;
  const node = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const appIDstr = process.env.NEXT_PUBLIC_APPID;
    const appID = parseInt(appIDstr ?? "");
    const serverSecret: string = process.env.NEXT_PUBLIC_SERVER_SECRET || "";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Enter Your Name"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: node.current,
      sharedLinks: [
        {
          name: "Personal Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, []); // Empty dependency array ensures it runs once after mount

  return (
    <div ref={node} className="flex justify-center items-center h-[100vh] w-full"></div>
  );
}

export default Room;
