import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestrictedAccess = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        const validateToken = async () => {
            const token =
                localStorage.getItem("Token") ||
                sessionStorage.getItem("Token");
            if (!token) {
                setIsValid(false);
                navigate("/sign-in");
                return;
            } else {
                setIsValid(true);
                navigate("/profile");
            }
        };

        validateToken();
    }, [navigate]);
};

export default RestrictedAccess;
