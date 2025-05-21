
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Trash } from "lucide-react";
import { useState } from "react";

// Sample contact data
const initialContacts = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    message: "I'm interested in interior design for my new house.",
    date: "2025-05-15"
  },
  {
    id: "2",
    name: "Sarah Smith",
    email: "sarah@example.com",
    message: "Looking for commercial office space design.",
    date: "2025-05-10"
  },
];

const AdminContacts = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    toast({
      title: "Contact deleted",
      description: "The contact has been removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Requests</h1>
        <p className="text-muted-foreground mt-2">
          Manage incoming contact requests from clients.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
              <TableCell>{contact.date}</TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {contacts.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center">No contacts found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminContacts;
