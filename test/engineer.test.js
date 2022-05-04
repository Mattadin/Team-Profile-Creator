const Engineer = require('../lib/engineer');
const engineer = new Engineer('Matthew', '3891', 'mattDaRat@coolemail.com', 'mattadin@github.com');

test('check if values from constructor works correctly', () => {
    expect(engineer.name).toBe('Matthew');
    expect(engineer.id).toBe('3891');
    expect(engineer.email).toBe('mattDaRat@coolemail.com');
    expect(engineer.gitHubUserName).toBe('mattadin@github.com');
});

test('check if name extractor works correctly', () => {
    expect(engineer.getName()).toBe('Matthew');
});

test('check if id extractor works correctly', () => {
    expect(engineer.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(engineer.getEmail()).toBe('mattDaRat@coolemail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(engineer.getRole()).toBe('Engineer');
});

test('check if school extractor works correctly', () => {
    expect(engineer.getgitHubUserName()).toBe('mattadin@github.com');
})