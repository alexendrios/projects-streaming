var agentType = Number(process.env.RTC_IN_SESSION_ID);
var agentName = process.env.RTC_AGENT_NAME;
var index = (Number(process.env.RTC_SESSION_IDX));
var agentSession = Number(process.env.RTC_SESSION_IDX);
var agentSessionName = process.env.RTC_SESSION_NAME;
var agentNumber = process.env.RTC_AGENT_NUM;
var sec = 1000;
var room = ['?room=stress-fr-001&lang=fr', '?room=stress-fr-002&lang=fr', '?room=stress-fr-003&lang=fr', '?room=stress-fr-004&lang=fr', '?room=stress-fr-005&lang=fr', '?room=stress-fr-006&lang=fr', '?room=stress-fr-007&lang=fr', '?room=stress-fr-008&lang=fr', '?room=stress-fr-009&lang=fr', '?room=stress-010', '?room=stress-011', '?room=stress-012', '?room=stress-013', '?room=stress-014', '?room=stress-015', '?room=stress-016', '?room=stress-017', '?room=stress-018', '?room=stress-019', '?room=stress-020', '?room=stress-021', '?room=stress-022', '?room=stress-023', '?room=stress-024', '?room=stress-025', '?room=stress-026', '?room=stress-027', '?room=stress-028', '?room=stress-029', '?room=stress-030', '?room=stress-031', '?room=stress-032', '?room=stress-033', '?room=stress-034', '?room=stress-035', '?room=stress-036', '?room=stress-037', '?room=stress-038', '?room=stress-039', '?room=stress-040', '?room=stress-041', '?room=stress-042', '?room=stress-043', '?room=stress-044', '?room=stress-045', '?room=stress-046', '?room=stress-047', '?room=stress-048', '?room=stress-049', '?room=stress-050', '?room=stress-051', '?room=stress-052', '?room=stress-053', '?room=stress-054', '?room=stress-055', '?room=stress-056', '?room=stress-057', '?room=stress-058', '?room=stress-059', '?room=stress-060', '?room=stress-061', '?room=stress-062', '?room=stress-063', '?room=stress-064', '?room=stress-065', '?room=stress-066', '?room=stress-067', '?room=stress-068', '?room=stress-069', '?room=stress-070', '?room=stress-071', '?room=stress-072', '?room=stress-073', '?room=stress-074', '?room=stress-075', '?room=stress-076', '?room=stress-077', '?room=stress-078', '?room=stress-079', '?room=stress-080', '?room=stress-081', '?room=stress-082', '?room=stress-083', '?room=stress-084', '?room=stress-085', '?room=stress-086', '?room=stress-087', '?room=stress-088', '?room=stress-089', '?room=stress-090', '?room=stress-091', '?room=stress-092', '?room=stress-093', '?room=stress-094', '?room=stress-095', '?room=stress-096', '?room=stress-097', '?room=stress-098', '?room=stress-099', '?room=stress-100'];
var roomUrl = process.env.RTC_SERVICE_URL;
index = index - 1;

client
  
    .resizeWindow(1280, 720)
    .pause(10 * sec)
    .rtcInfo("testRTC agent start - agent: %s room: %s", agentName, (roomUrl + room[index]))
    .url((roomUrl + room[index]))
    .pause(3 * sec)
    .waitForElementVisible('button[data-cy-join-now="true"]:enabled', 60 * sec) 
    .click('button[data-cy-join-now="true"]')
    .rtcProgress("In  " + (roomUrl + room[index]))

    // Give some time to collect media stats
    .pause(60 * sec)
    .rtcScreenshot('mid-call')
    .pause(60 * sec);