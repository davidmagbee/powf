'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const DeleteIssueButton = ({issueId}: {issueId: number}) => {

    const router = useRouter()

    return (
    <AlertDialog.Root>
        <AlertDialog.Trigger>
        <Button color='red'>Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
            <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
            <AlertDialog.Description>
                Are you sure you want to delete this issue?
                There is no turning back from this decision.
            </AlertDialog.Description>
            <Flex mt='4' gap ='4'>
                <AlertDialog.Cancel>
                    <Button variant='soft' color='gray'>Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                    <Button color='red' onClick={async () => {
                        await axios.delete('/api/issues/' + issueId)
                        router.push('/issues/')
                        router.refresh()
                    }}>Confirm Delete</Button>
                </AlertDialog.Action>
            </Flex>
        </AlertDialog.Content>
    </AlertDialog.Root>

    )
}

export default DeleteIssueButton