import { Button, Card, Flex, Heading, Text, TextField } from "@radix-ui/themes"
import { useFrappeAuth } from "frappe-react-sdk"
import { useState } from "react"
import { ErrorBanner } from "../../components/common/ErrorBanner"

const Login = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [loginError, setLoginError] = useState<any>('')

    const { login, isLoading } = useFrappeAuth()

    const onSubmit = () => {

        login({
            username: username,
            password: password,
        }).then(res => {
            console.log(res)
            setLoginError(undefined)
        }).catch(err => {
            setLoginError(err)
        })

    }

    return (
        <div>
            <Flex align='center' justify='center'
                className="w-screen h-screen"
            >
                <Card className="w-[40vw] p-2">
                    <Flex direction='column' gap='4'>
                        <Heading>Login</Heading>

                        {loginError ?
                            <ErrorBanner error={loginError} /> : null}
                        <Flex direction='column' gap='2'>
                            <Text as='label'>
                                Username/Email
                            </Text>
                            <TextField.Root>
                                <TextField.Input placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
                            </TextField.Root>
                        </Flex>

                        <Flex direction='column' gap='2'>
                            <Text as='label'>
                                Password
                            </Text>
                            <TextField.Root>
                                <TextField.Input
                                    type='password'
                                    placeholder="*******"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </TextField.Root>
                        </Flex>

                        <Button onClick={onSubmit} disabled={isLoading}>
                            Login
                        </Button>
                    </Flex>

                </Card>
            </Flex>
        </div>
    )
}

export default Login