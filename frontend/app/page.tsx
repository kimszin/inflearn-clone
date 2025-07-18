import { auth, signOut } from "@/auth";
import Link from "next/link";
import React, { FC } from "react";

const MainPage: FC = async () => {
  const session = await auth();

  return (
    <div>
      <p>현재 로그인한 계정의 이메일</p>
      <p>{session?.user?.email}</p>
      {session?.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">로그아웃</button>
        </form>
      ) : (
        <Link href="/signin">로그인</Link>
      )}
    </div>
  );
};

export default MainPage;
