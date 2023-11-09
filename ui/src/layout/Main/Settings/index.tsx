import { useState } from "react";
import { Button } from "./Settings";
import { Popup } from "./Popup";
import { SettingIcon } from "../../../components/icons";
import { useOutsideClick } from "../../../hooks";
import type { Language } from "../../../types";

interface SettingsProps {
    onChangeTheme: () => void,
}

export const Settings = ({ onChangeTheme }: SettingsProps ) => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState<Language>("eng");
    const ref = useOutsideClick(() => setOpen(false));

    const handleClick = () => {
        console.log("open", open)
        console.log("!open", !open)
        setOpen(!open);
    };

    return <>
        <Button type="button" onClick={handleClick} className={open ? "active" : ""}>
            <SettingIcon size="32px"/>
        </Button>

        {open && 
            //@ts-ignore
                <Popup ref={ref}>
                    <div className="head">Settings</div>
                    <div>asd</div>
                    <div>asd</div>
                </Popup>
            }
    </>
};