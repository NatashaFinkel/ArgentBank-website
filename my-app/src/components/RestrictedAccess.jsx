import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const RestrictedAccess = ({ children }) => {
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        const validateToken = async () => {
            const token =
                localStorage.getItem("Token") ||
                sessionStorage.getItem("Token");
            if (!token) {
                setIsValid(false);
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:3001/api/v1/user/profile",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.ok) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            } catch (error) {
                console.error("Token validation error:", error);
                setIsValid(false);
            }
        };

        validateToken();
    }, []);

    if (isValid === null) {
        return <div>Loading...</div>;
    }

    return isValid ? children : <Navigate to="/sign-in" />;
};

RestrictedAccess.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RestrictedAccess;
