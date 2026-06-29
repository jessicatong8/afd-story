import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IS_STUDY } from "../config";

const PREVIEW_PASSWORD = "storybookpreview";
const PREVIEW_ACCESS_KEY = "storybook-preview-auth";

function PreviewLoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (IS_STUDY) {
      navigate("/", { replace: true });
      return;
    }

    if (sessionStorage.getItem(PREVIEW_ACCESS_KEY) === "true") {
      navigate("/read/0", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === PREVIEW_PASSWORD) {
      sessionStorage.setItem(PREVIEW_ACCESS_KEY, "true");
      navigate("/read/0", { replace: true });
      return;
    }

    setError("That password is incorrect. Please try again.");
  };

  return (
    <div className="min-h-screen bg-blue-tertiary px-4 py-12 text-slate-800">
      <div className="mx-auto flex max-w-md flex-col gap-6 rounded-2xl border border-blue-tertiary bg-white/90 p-8 shadow-xl backdrop-blur-sm">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-secondary">
            Preview access
          </p>
          <h1 className="text-3xl font-bold text-slate-900">
            Enter the password
          </h1>
          <p className="text-sm text-slate-600">
            This preview of the Food Is My Love Langauge storybook requires a
            password.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) {
                  setError("");
                }
              }}
              className="rounded-lg border border-slate-300 px-4 py-3 text-base shadow-sm outline-none transition focus:border-blue-primary focus:ring-2 focus:ring-blue-tertiary"
              placeholder="Enter password"
              autoFocus
            />
          </label>

          {error ? (
            <p className="text-sm font-medium text-rose-600">{error}</p>
          ) : null}

          <button
            type="submit"
            className="flex items-center justify-center rounded-lg px-4 py-3 button text-base font-semibold text-white transition"
          >
            Continue to story
          </button>
        </form>

        <Link
          to="/"
          className="text-sm font-medium text-blue-primary underline-offset-4 hover:underline"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default PreviewLoginPage;
