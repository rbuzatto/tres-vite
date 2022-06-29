import './App.css'
import { ChakraProvider, Heading, Container, Box } from "@chakra-ui/react"

const App = (): JSX.Element => {

  return (
    <ChakraProvider>
      <main className="App">
        <Container>
          <Box boxShadow='xl' p='24' rounded='md' bg='white'>
            <header className="App-header">
              <Heading
                bgGradient='linear(to-l, #7928CA, #bfcf31cf)'
                bgClip='text'
                as='h1' size='2xl'
                fontWeight='extrabold'
              >
                Welcome to Chakra UI
              </Heading>
            </header>
          </Box>
        </Container>
      </main>
    </ChakraProvider>
  )
}

export default App
