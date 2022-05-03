const Employee = require('../lib/employee');
const employee = new Employee('Matthew', '3891', 'mattDaRat@coolemail.com');

test('check if values from constructor works correctly', () => {
    expect(employee.name).toBe('Matthew');
    expect(employee.id).toBe('3891');
    expect(employee.email).toBe('mattDaRat@coolemail.com');
});

test('check if name extractor works correctly', () => {
    expect(employee.getName()).toBe('Matthew');
});

test('check if id extractor works correctly', () => {
    expect(employee.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(employee.getEmail()).toBe('mattDaRat@coolemail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(employee.getRole()).toBe('Employee');
});