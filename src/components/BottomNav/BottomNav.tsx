import React from "react";
import { BarChart2, Clock, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useClientStore } from "@/stores/clientStore";

export const BottomNav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn } = useClientStore();

    const handleMenuClick = () => {
        navigate(location.pathname === "/menu" ? "/trade" : "/menu");
    };

    return (
        <nav
            className="flex items-center justify-around px-4 py-2 border-t border-theme bg-theme"
            data-testid="bottom-nav-menu"
        >
            <button
                onClick={() => navigate("/trade")}
                className={`flex flex-col items-center gap-1 ${
                    location.pathname === "/trade" ? "text-primary" : "text-theme-muted"
                }`}
            >
                <BarChart2 className="w-5 h-5" />
                <span className="text-xs">Trade</span>
            </button>
            {isLoggedIn && (
                <button
                    onClick={() => navigate("/positions")}
                    className={`flex flex-col items-center gap-1 ${
                        location.pathname === "/positions" ? "text-primary" : "text-theme-muted"
                    }`}
                >
                    <Clock className="w-5 h-5" />
                    <span className="text-xs">Positions</span>
                </button>
            )}
            <button
                onClick={handleMenuClick}
                className={`flex flex-col items-center gap-1 ${
                    location.pathname === "/menu" ? "text-primary" : "text-theme-muted"
                }`}
            >
                <Menu className="w-5 h-5" />
                <span className="text-xs">Menu</span>
            </button>
        </nav>
    );
};
