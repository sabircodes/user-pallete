
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={user.avatar} 
          alt={`${user.first_name} ${user.last_name}`} 
          className="h-full w-full object-cover transition-all"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        {onEdit ? (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => onEdit(user)}
          >
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        ) : (
          <Link to={`/users/${user.id}/edit`}>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
            >
              <Edit className="h-4 w-4" />
              Edit
            </Button>
          </Link>
        )}
        <Button 
          variant="destructive" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => onDelete(user.id)}
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
