// ✅ src/lib/settings.ts
export const AppConfig = {
    name: "NovaCore",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  };
  
  export const ThemeColors = {
    primary: "#2563eb",
    secondary: "#64748b",
  };
  
  export const Features = {
    enableAppointments: true,
    enableChatbot: true,
    enablePayments: true,
    enableCRMModules: true,
  };
  