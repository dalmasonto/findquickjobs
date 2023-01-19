import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from 'cookies-next';
import { THEME_COOKIE_NAME } from "../configs/appConfigs";



export function MantineWrapper(props: any) {

    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
      const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
      setColorScheme(nextColorScheme);
      setCookie(THEME_COOKIE_NAME, nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

    return (
        <>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                    <ModalsProvider>
                        <NotificationsProvider>
                            {props?.children}
                        </NotificationsProvider>
                    </ModalsProvider>
                </MantineProvider>
            </ColorSchemeProvider >
        </>
    )
}