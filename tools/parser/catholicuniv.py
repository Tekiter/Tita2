import sys
import json
import re


def error(msg):
    sys.stderr.write(msg+"\n")
    exit(-1)


def convertObject(obj, keymap):
    newobj = {}

    for k, v in obj.items():
        if keymap.get(k, None) != None:
            m = keymap[k]
            newobj[m] = v

    return newobj


def generate(school, timespan, subjects):
    obj = {
        "type": "tita_subjects",
        "version": "1.0.0",
        "school": school,
        "timespan": timespan,
        "subjects": subjects
    }

    return obj


def dayToCode(day):
    if day == '일':
        return 1
    if day == '월':
        return 2
    if day == '화':
        return 3
    if day == '수':
        return 4
    if day == '목':
        return 5
    if day == '금':
        return 6
    if day == '토':
        return 7


def parseTime(raw):
    raw = re.compile('''\(.*?\)''').sub('', raw)
    raw = [t.rstrip().lstrip() for t in raw.split(',')]
    result = []
    for r in raw:
        day = dayToCode(r[0])
        if '~' in r:
            f, t = ((int(x)+8)*100 for x in r[1:].split('~'))
            t += 100
        else:
            f = (int(r[1:])+8)*100
            t = f+100

        result.append([day, f, t])
    return result


def parseSubjects(raw):
    result = []

    subjects = raw['DS_CURR_COMMON']

    for subject in subjects:
        o = convertObject(subject, {
            'sbjtKorNm': 'name',
            'sustNm': 'major',
            'tmTblDesc': 'time'
        })
        if subject.get('tmTblDesc') == None:
            continue
        o["time"] = parseTime(subject["tmTblDesc"])

        o["info"] = convertObject(subject, {
            'sbjtNo': 'code',
            'clssNo': 'divi'
        })

        result.append(o)

    return result


if __name__ == "__main__":
    if len(sys.argv) != 3:
        error("Usage: {} [Subjects JSON File] [Output JSON File]".format(
            sys.argv[0]))

    try:
        fp = open(sys.argv[1], encoding="utf-8")

    except:
        error("Failed to open {}".format(sys.argv[1]))

    raw = json.load(fp)
    fp.close()

    subjects = parseSubjects(raw)

    output = generate(school="가톨릭대학교", timespan="1234", subjects=subjects)

    fp = open(sys.argv[2], 'w', encoding="utf-8")
    json.dump(output, fp, ensure_ascii=False, indent=2)
