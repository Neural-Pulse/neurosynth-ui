import React from 'react';
import { BoardProps, ColumnProps, Item } from './Board.types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Column: React.FC<ColumnProps> = ({ column, index }) => {
    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-neuralpulse-gray p-4 m-2 rounded"
                >
                    <h2 className="font-bold text-white">{column.title}</h2>
                    {column.items.map((item: Item, index: number) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="bg-neuralpulse-light-green p-2 m-2 rounded"
                                >
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>
            )}
        </Draggable>
    );
};

const Board: React.FC<BoardProps> = ({ columns, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" direction="horizontal" type="column">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex overflow-auto"
                    >
                        {columns.map((column, index) => (
                            <Column key={column.id} column={column} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Board;
