/**
 * Animated Pocket AI logo.
 * size: pixel size of the circular mark
 * withText: show "Pocket AI" wordmark next to the mark
 */
export default function Logo({ size = 42, withText = true, subtitle }) {
  return (
    <div className="flex items-center gap-[14px]">

      {/* Logo Mark */}
      <div
        className="
          relative
          flex shrink-0
          items-center justify-center
        "
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Animated Ring */}
        <span
          className="
            absolute inset-0
            rounded-full
            bg-[conic-gradient(from_0deg,#00ffff,#6f3cff,#ff4fd8,#00ffff)]
            animate-[spin_6s_linear_infinite]
            shadow-[0_0_18px_rgba(111,60,255,0.55)]
          "
        />

        {/* Logo Core */}
        <span
          className="
            absolute
            inset-[18%]
            rounded-full
            bg-white
            [.app.light_&]:bg-white
          "
        />
      </div>

      {/* Logo Text */}
      {withText && (
        <div>
          <h2
            className="
              text-[24px]
              font-bold
              tracking-[0.2px]
              whitespace-nowrap
              text-black
              [.app.light_&]:text-[#111827]
            "
          >
            Pocket{" "}
            <span
              className="
                bg-[linear-gradient(135deg,#00ffff,#6f3cff,#ff4fd8)]
                bg-clip-text
                text-transparent
              "
            >
              AI
            </span>
          </h2>

          {subtitle && (
            <p
              className="
                mt-[2px]
                text-[11.5px]
                text-[#6b7280]
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

    </div>
  );
}