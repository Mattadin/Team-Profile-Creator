const Intern = require('../lib/intern');
const intern = new Intern('Matthew', '3891', 'mattDaRat@coolemail.com', 'FSU');

test('check if values from constructor works correctly', () => {
    expect(intern.name).toBe('Matthew');
    expect(intern.id).toBe('3891');
    expect(intern.email).toBe('mattDaRat@coolemail.com');
    expect(intern.school).toBe('FSU');
});

test('check if name extractor works correctly', () => {
    expect(intern.getName()).toBe('Matthew');
});

test('check if id extractor works correctly', () => {
    expect(intern.getId()).toBe('3891');
});

test('check if email extractor works correctly', () => {
    expect(intern.getEmail()).toBe('mattDaRat@coolemail.com');
});

test('check if role extractor works correctly', ()=> {
    expect(intern.getRole()).toBe('Intern');
});

test('check if school extractor works correctly', () => {
    expect(intern.getSchool()).toBe('FSU');
})