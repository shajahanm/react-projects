// slices/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
    value: string;
}

const initialState: ExampleState = {
    value: '',
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setExampleValue(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
    },
});

export const { setExampleValue } = exampleSlice.actions;
export default exampleSlice.reducer;
