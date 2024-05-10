import React, { useState } from "react";
import { Container, VStack, HStack, Button, Text, Input, List, ListItem, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const toast = useToast();

  const handleAddItem = () => {
    if (newItem.trim() === "") {
      toast({
        title: "Cannot add empty item",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setItems([...items, newItem]);
    setNewItem("");
    toast({
      title: "Item added",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    toast({
      title: "Item removed",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Inventory Management System
        </Text>
        <HStack width="100%">
          <Input placeholder="Add new item" value={newItem} onChange={(e) => setNewItem(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddItem()} />
          <IconButton aria-label="Add item" icon={<FaPlus />} onClick={handleAddItem} />
        </HStack>
        <List width="100%">
          {items.map((item, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" paddingY={2}>
              <Text>{item}</Text>
              <IconButton aria-label="Delete item" icon={<FaTrash />} onClick={() => handleRemoveItem(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
