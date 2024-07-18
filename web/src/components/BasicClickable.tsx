export function BasicClickable({
  children,
  onClick,
  fullWidth = false,
  inset,
}: {
  children: string | JSX.Element;
  onClick?: () => void;
  inset?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        border 
        border-border
        rounded
        font-medium 
        text-emphasis 
        text-sm
        relative
        px-1 py-1.5
        h-full
        bg-background
        select-none
        overflow-hidden
        hover:bg-hover-light
        ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}

export function EmphasizedClickable({
  children,
  onClick,
  fullWidth = false,
}: {
  children: string | JSX.Element;
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  return (
    <button
      className={`
    inline-flex 
    items-center 
    justify-center 
    flex-shrink-0 
    font-medium 
    min-h-[38px] 
    py-2 
    px-3 
    w-fit 
    bg-hover
    border-1 border-neutral-300 border bg-neutral-100 
    text-sm
    rounded-lg
    hover:bg-background-125
`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function BasicSelectable({
  children,
  selected,
  hasBorder,
  fullWidth = false,
  padding = "normal",
}: {
  children: string | JSX.Element;
  selected: boolean;
  hasBorder?: boolean;
  fullWidth?: boolean;
  padding?: "none" | "normal" | "extra";
}) {
  return (
    <div
      className={`
        rounded
        font-medium 
        text-emphasis 
        text-sm
        ${padding == "normal" && "p-1"}
        ${padding == "extra" && "p-1.5"}
        select-none
        ${hasBorder ? "border border-border" : ""}
        ${selected ? "bg-hover" : "hover:bg-hover"}
        ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </div>
  );
}
