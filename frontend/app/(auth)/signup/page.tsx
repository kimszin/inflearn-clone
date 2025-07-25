"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { signUp } from "@/app/actions/auth-actions";
import { redirect } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const result = await signUp({
      email,
      password,
    });
    if (result?.status === "ok") {
      redirect("/signin");
    }

    if (result?.message) {
      alert(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">회원가입</h1>
      <p className="text-gray-700">인프런에서 성장의 발판을 마련하세요</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 min-w-[300px]"
      >
        <label htmlFor="email">이메일</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="example@inflab.com"
          className="border-2 border-gray-300 rounded-sm p-2"
        />
        <label htmlFor="password">비밀번호</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="example@inflab.com"
          className="border-2 border-gray-300 rounded-sm p-2"
        />
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="password"
          name="passwordConfirm"
          placeholder="example@inflab.com"
          className="border-2 border-gray-300 rounded-sm p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold cursor-pointer rounded-sm p-2"
        >
          회원가입
        </button>
        <p className="space-x-2 text-center">
          <span>이미 계정이 있으신가요?</span>
          <Link href="/signin" className="text-blue-500">
            로그인
          </Link>
        </p>
      </form>
    </div>
  );
}
