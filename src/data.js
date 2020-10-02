let data = 'eyJhZGRyZXNzIjp7ImNpdHkiOiJCYWtlcnNmaWVsZCIsInN0YXRlIjoiQ2FsaWZvcm5pYSIsInN0YXRlU2hvcnQiOiJDQSIsInBob25lIjoiKDUxMCkgNjkzLTEyNTgiLCJuYW1lIjoiRGlhcm11aWQgTXVycGh5IiwibGlua2VkSW4iOiJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGlhcm11aWRtdXJwaHkvIiwiZ2l0aHViIjoiaHR0cDovL3d3dy5naXRodWIuY29tL2RpYXJtdWlkLW11cnBoeS8iLCJlbWFpbCI6ImRpYXJtdWlkLmNvbUBnbWFpbC5jb20ifSwic2tpbGxzQW5kQWJpbGl0aWVzIjp7InJvbGUiOiJGdWxsIFN0YWNrIEphdmFzY3JpcHQgRGV2ZWxvcGVyIiwiYmFja0VuZCI6WyJOb2RlIiwiRXhwcmVzcyIsIlBIUCIsIlJ1YnkiLCJQeXRob24iXSwiZGF0YWJhc2VzIjpbIk15U1FMICYgU2VxdWVsaXplIiwiTW9uZ29EQiAmIE1vbmdvb3NlIiwiRmlyZWJhc2UgUmVhbHRpbWUgRGF0YWJhc2UiXSwiZnJvbnRFbmQiOlsiUmVhY3RKUyIsIkhUTUw1IiwiQ1NTMyIsIkphdmFzY3JpcHQiLCJFUzYiLCJqUXVlcnkiLCJKU1giLCJIYW5kbGViYXJzIiwiRUpTIiwiUHVnL0phZGUiXSwidG9vbHMiOlsiZ2l0IiwibnBtIiwiTGludXgiLCJMRVNTIiwiU0NTUyIsIkdydW50IiwiSGVyb2t1IiwiQnJvd3NlcmlmeSIsIldlYnBhY2siLCJBZG9iZSBQaG90b3Nob3AiXSwib3RoZXIiOlsiRmFtaWxpYXJpdHkgd2l0aCBBcGFjaGUgc2VydmVyLCBETlMgLyBkb21haW4gY29uZmlndXJhdGlvbiIsIkRpZ2l0YWwgbWFya2V0aW5nIHN0cmF0ZWdpZXMgJiBiZXN0IHByYWN0aWNlcyBpZS4gU0VPLCBTRU0sIFBQQyIsIlJFU1RmdWwgV2ViIFNlcnZpY2VzICYgQVBJcywgTVZDIEFwcGxpY2F0aW9uIERlc2lnbiAmIEFyY2hpdGVjdHVyZSJdfSwiZXhwZXJpZW5jZSI6W3sicm9sZSI6IkZ1bGwgU3RhY2sgV2ViIERldmVsb3BtZW50IEluc3RydWN0b3IiLCJjb21wYW55IjoiVUNMQSBFeHRlbnNpb24sIFVuaXZlcnNpdHkgb2YgVXRhaCAoVHJpbG9neS8yVSkiLCJ3ZWJzaXRlIjoiaHR0cHM6Ly93d3cudHJpbG9neWVkLmNvbS8iLCJ5ZWFycyI6IkZlYnJ1YXJ5IDIwMjAgLSBQcmVzZW50IiwiZHV0aWVzIjpbIkRlbGl2ZXIgZnVsbCBzdGFjayBjb3Vyc2UgY3VycmljdWx1bSB0byBzdHVkZW50cyBiYWxhbmNpbmcgdGVjaG5pY2FsIGRldGFpbCB3aXRoIHVuZGVyc3RhbmRhYmxlIGV4YW1wbGVzIiwiSGVscCBzdHVkZW50cyBnZXQgdGhlIG1vc3QgZnJvbSB0aGUgY291cnNlIGJ5IGFuc3dlcmluZyBxdWVzdGlvbnMgb3IgcHJvdmlkaW5nIHN1cHBsZW1lbnRhbCBsZWFybmluZyIsIlJlY29nbml6ZSBzdHJ1Z2dsaW5nIHN0dWRlbnRzIGFuZCBwcm92aWRlIHRoZW0gd2l0aCBhZGRpdGlvbmFsIGV4YW1wbGVzIG9yIGFuYWxvZ2llcyBmb3IgdGhlIG1hdGVyaWFsIiwiTWFuYWdlIGNsYXNzcm9vbSB0byBlbnN1cmUgYSBwb3NpdGl2ZSwgZW5nYWdpbmcsIHNhZmUgbGVhcm5pbmcgZXhwZXJpZW5jZSBmb3IgYWxsIHN0dWRlbnRzIiwiQ29vcmRpbmF0ZSB3aXRoIFRBcyB0byBncmFkZSAmIGNvcnJlY3QgaG9tZXdvcmsgYXNzaWdubWVudHMgc3VibWl0dGVkIGJ5IHN0dWRlbnRzIl19LHsicm9sZSI6IkZyb250LWVuZCBXZWIgRGV2ZWxvcGVyIiwiY29tcGFueSI6IkwuRS5ULiBHcm91cCAtIERpZ2l0YWwgTWFya2V0aW5nIEFnZW5jeSIsIndlYnNpdGUiOiJodHRwOi8vd3d3LmxldGdyb3VwLmNvbS8iLCJ5ZWFycyI6IkF1ZyAyMDEzIC0gSnVuIDIwMTkgKH42IHllYXJzKSIsImR1dGllcyI6WyJCdWlsZCB3ZWJzaXRlcyB0byBkZXNpZ24gc3BlY2lmaWNhdGlvbnMgdXNpbmcgdmFyaW91cyBsaWJyYXJpZXMgJiB0ZWNobm9sb2dpZXMgZWcuIEdyaWQsIEZsZXhib3gsIE1hc29ucnkuanMsIGpRdWVyeSwgU0NTUyIsIkltcGxlbWVudCBjdXN0b20gR29vZ2xlIE1hcHMvT3BlblN0cmVldE1hcHMgdXNpbmcgR29vZ2xlIE1hcHMgQVBJIG9yIExlYWZsZXQuanMiLCJDb2RlIGN1c3RvbSB3ZWIgZm9ybXMgdmFsaWRhdGVkIHdpdGggSmF2YXNjcmlwdCAoQUpBWCkgYW5kIHByb2Nlc3NlZCB3aXRoIFBIUCB0byBiZSBzdG9yZWQgaW4gYSBEQiBhbmQgZW1haWxlZCB0byBjbGllbnQiLCJDcmVhdGUgY3VzdG9tIHBob3RvIGdhbGxlcmllcyB1c2luZyB2YXJpb3VzIHRlY2hub2xvZ2llcyBlZy4gQmFja3N0cmV0Y2guanMsIFNsaWNrLmpzLCBqUXVlcnkiLCJJbXBsZW1lbnQgdmFyaW91cyB3aWRnZXRzICYgdGhpcmQgcGFydHkgZmVhdHVyZXMgc3VjaCBhcyBPcGVuVGFibGUgcmVzZXJ2YXRpb25zLCBUcmlwQWR2aXNvciByZXZpZXdzLCBTaW5nbGVQbGF0Zm9ybSBtZW51cyIsIkNyZWF0ZSBib29raW5nIGZvcm1zIHdoaWNoIGludGVyYWN0IHdpdGggcHJvcGVydHkgbWFuYWdlbWVudCBBUElzIGVnLiBUcmF2ZWxDbGljaywgaUhvdGVsaWVyLCBXZWJSZXpQcm8sIGlublJvYWQiXX0seyJyb2xlIjoiV2ViIE1hcmtldGluZyBTcGVjaWFsaXN0IiwiY29tcGFueSI6IkdMRU5BUkFOIiwid2Vic2l0ZSI6Imh0dHA6Ly93d3cuZ2xlbmFyYW4uY29tLyIsInllYXJzIjoiT2N0IDIwMTEgLSBKdWwgMjAxMiAofjEgeWVhcikiLCJkdXRpZXMiOlsiTWFuYWdlIHZhcmlvdXMgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbXMgdXBkYXRpbmcgc2l0ZXMgYW5kIHByb2R1Y3QgbGlzdGluZ3MiLCJSZXNlYXJjaCBkaWZmZXJlbnQgSXJpc2ggZmFtaWx5IHN1cm5hbWVzLCBkZXRlcm1pbmUgdmlhYmlsaXR5IGZvciBpbmRpdmlkdWFsIHdlYnNpdGUiLCJDcmVhdGUgd2Vic2l0ZSAmIHNvY2lhbCBtZWRpYSBwcmVzZW5jZSBmb3IgZWFjaCBzdXJuYW1lLCBpbmNsdWRpbmcgY29weSBhbmQgdmlzdWFscyIsIlByZXBhcmUgdmFyaW91cyByZXBvcnRzIG9uIGRhaWx5IGFjdGl2ZSB1c2VycywgY29udmVyc2lvbiByYXRlcyBldGMuIGZvciBhbGwgd2Vic2l0ZXMiXX1dLCJlZHVjYXRpb24iOlt7ImRlZ3JlZSI6IkJhY2hlbG9yIG9mIEJ1c2luZXNzIGluIE1hbmFnZW1lbnQiLCJzY2hvb2wiOiJDb3JrIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5Iiwid2Vic2l0ZSI6Imh0dHA6Ly93d3cuY2l0LmllLyJ9LHsiZGVncmVlIjoiQXNzb2NpYXRlcyBEZWdyZWUgb2YgQnVzaW5lc3MgaW4gVG91cmlzbSIsInNjaG9vbCI6IkNvcmsgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3kiLCJ3ZWJzaXRlIjoiaHR0cDovL3d3dy5jaXQuaWUvIn1dLCJjZXJ0aWZpY2F0aW9ucyI6W3sibmFtZSI6IkZyb250IEVuZCBXZWIgRGV2ZWxvcG1lbnQiLCJpbWFnZSI6Imh0dHA6Ly9kaWFybXVpZG11cnBoeS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDQvd3d3LmZyZWVjb2RlY2FtcC5vcmctZGlhcm11aWQtbXVycGh5LWZyb250LWVuZC1jZXJ0aWZpY2F0aW9uLnBuZyJ9LHsibmFtZSI6Ikdvb2dsZSBPbmxpbmUgTWFya2V0aW5nIFF1YWxpZmljYXRpb24iLCJpbWFnZSI6Imh0dHA6Ly93d3cuZGlhcm11aWRtdXJwaHkuY29tL2dvb2dsZS1vbmxpbmUtbWFya2V0aW5nLWNlcnRpZmljYXRpb24vIn0seyJuYW1lIjoiUmVhY3RKUyIsImltYWdlIjoiaHR0cDovL2RpYXJtdWlkbXVycGh5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9yZWFjdC1jZXJ0LTEuanBnIn0seyJuYW1lIjoiRHJvbmUgUGhvdG9ncmFwaHkiLCJpbWFnZSI6Imh0dHA6Ly93d3cuZGlhcm11aWRtdXJwaHkuY29tL2x5bmRhLWNvbS1kcm9uZS1waG90b2dyYXBoeS1jZXJ0aWZpY2F0aW9uLyJ9XX0=';

export default JSON.parse(atob(data));