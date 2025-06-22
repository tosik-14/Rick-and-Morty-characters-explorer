import { Tabs } from "expo-router";
import { useThemeColors } from "@/src/shared/hooks/useThemeColor";
import Icon from "@/src/shared/ui/Icon";

export default function TabsLayout() {
    const { tint, tintBackground, tintBorderColor, iconColor } =
        useThemeColors();

    return (
        <Tabs
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: "WubbaLubba",
                    fontSize: 30,
                    color: "#02B0C9",
                },
                headerTitleAlign: "center",

                tabBarStyle: {
                    height: 75,
                    backgroundColor: tintBackground,
                    borderTopWidth: 0,
                    borderTopColor: tintBorderColor,
                    elevation: 0,
                    shadowOpacity: 0,
                    shadowColor: "tintBorderColor",
                    shadowOffset: { height: 0, width: 0 },
                },

                tabBarActiveTintColor: tint,
                tabBarLabelStyle: {
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerStyle: {
                        backgroundColor: tintBackground,
                    },
                    headerTintColor: tint,
                    tabBarIcon: () => (
                        <Icon name="home" size={20} color={iconColor} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    headerStyle: {
                        backgroundColor: tintBackground,
                    },

                    headerTintColor: tint,
                    tabBarIcon: () => (
                        <Icon name="settings" size={20} color={iconColor} />
                    ),
                }}
            />
        </Tabs>
    );
}
