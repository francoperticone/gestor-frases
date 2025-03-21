import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Gestor de Frases", () => {
  test("Muestra el título de la aplicación", () => {
    render(<App />);
    expect(screen.getByText("Gestor de Frases")).toBeInTheDocument();
  });

  test("Permite agregar una frase y mostrarla en la lista", () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText("Escribe una frase...");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(input, { target: { value: "Hola mundo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
  });

  test("Filtra las frases correctamente al buscar", () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText("Escribe una frase...");
    const addButton = screen.getByText("Agregar");
    const searchInput = screen.getByPlaceholderText("Buscar frases...");

    fireEvent.change(input, { target: { value: "Frase 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Otra cosa" } });
    fireEvent.click(addButton);

    fireEvent.change(searchInput, { target: { value: "Frase 1" } });

    expect(screen.getByText("Frase 1")).toBeInTheDocument();
    expect(screen.queryByText("Otra cosa")).not.toBeInTheDocument();
  });

  test("Permite eliminar una frase", () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText("Escribe una frase...");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(input, { target: { value: "Eliminar esta frase" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("✖");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Eliminar esta frase")).not.toBeInTheDocument();
  });
});
