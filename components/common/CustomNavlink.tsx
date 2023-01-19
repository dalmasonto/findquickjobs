import { Button, NavLink, Text } from '@mantine/core'
import { NextLink } from '@mantine/next'
import Link from 'next/link'
import React from 'react'


const CustomNavlink = (props: any) => {
    return (
        <Link href={props?.navlink?.href} as={props?.navlink?.href}>
            <Text p="md" sx={theme => ({
                border: "none",
                // color: theme.colors.pink[6],
                background: "transparent",
                fontSize: "16px",
                fontWeight: 400,
                "&:hover": {
                    background: "transparent",
                    color: theme.colors.indigo[6],
                }
            })}>
                {props?.navlink?.label}
            </Text>
        </Link>
    )
}

export default CustomNavlink