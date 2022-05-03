const Manager = require('../lib/manager');
const manager = new Manager('Matthew', '3891', 'mattDaRat@coolemail.com', '1313');

test('check if values from constructor works correctly', () => {
    expect(manager.name).toBe('Matthew');
    expect(manager.id).toBe('3891');
    expect(manager.email).toBe('mattDaRat@coolemail.com');
    expect(manager.officeNumber).toBe('1313');
});

test('check if name extractor works correctly', () => {
    expect(manager.getName()).toBe('Matthew');
});

test('check if id extractor works correctly', () => {
    expect(manager.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(manager.getEmail()).toBe('mattDaRat@coolemail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(manager.getRole()).toBe('Manager');
});

test('check if office number extractor works correctly', () => {
    expect(manager.getOfficeNumber()).toBe('1313');
})