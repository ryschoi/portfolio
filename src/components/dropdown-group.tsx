import { createContext, useContext, useState } from "react";

interface DropdownGroupContextValue {
    openId: string | null;
    toggle: (id: string) => void;
    // Claims the group's initially-open slot for `id`, but only if nothing's
    // open yet - lets a Dropdown request "open by default" without the group
    // needing to know its children's ids up front.
    openDefault: (id: string) => void;
}

const DropdownGroupContext = createContext<DropdownGroupContextValue | null>(null);

export function useDropdownGroup() {
    return useContext(DropdownGroupContext);
}

export default function DropdownGroup({ children, classes }: { children: React.ReactNode, classes?: string }) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const openDefault = (id: string) => {
        setOpenId((prev) => prev ?? id);
    };

    return (
        <DropdownGroupContext.Provider value={{ openId, toggle, openDefault }}>
            <div className={`dropdown-group ${classes || ""}`}>
                {children}
            </div>
        </DropdownGroupContext.Provider>
    );
}
