OK_FORMAT = True

test = {   'name': 'q1',
    'points': None,
    'suites': [   {   'cases': [   {   'code': '>>> def test_print_datatypes(out):\n'
                                               '...     output = out.splitlines()\n'
                                               '...     print(output)\n'
                                               '...     assert output[0] == "a = 1, My guess: int, Data type: <class \'int\'>"\n'
                                               '...     assert output[1] == "b = 8.3, My guess: float, Data type: <class \'float\'>"\n'
                                               '...     assert output[2] == "c = s, My guess: str, Data type: <class \'str\'>"\n'
                                               '...     assert output[3] == "d = word, My guess: str, Data type: <class \'str\'>"\n'
                                               '...     assert output[4] == "e = True, My guess: bool, Data type: <class \'bool\'>"\n'
                                               '...     assert output[5] == "f = False, My guess: bool, Data type: <class \'bool\'>"\n'
                                               '...     assert output[6] == "g = None, My guess: None, Data type: <class \'NoneType\'>"\n'
                                               '...     assert output[7] == "h = [1, 2, 3], My guess: list, Data type: <class \'list\'>"\n'
                                               '...     assert output[8] == "i = (1, 2, 3), My guess: tuple, Data type: <class \'tuple\'>"\n'
                                               '...     assert output[9] == "j = {1, 2, 3}, My guess: set, Data type: <class \'set\'>"\n'
                                               '...     assert output[10] == "k = {\'a\': 1, \'b\': 2, \'c\': 3}, My guess: dict, Data type: <class \'dict\'>"\n'
                                               '...     assert output[11] == "l = range(0, 10), My guess: range, Data type: <class \'range\'>"\n'
                                               '...     assert output[12] == "m = [1, \'s\', True], My guess: list, Data type: <class \'list\'>"\n'
                                               '>>> test_print_datatypes(out)\n'
                                               '["a = 1, My guess: int, Data type: <class \'int\'>", "b = 8.3, My guess: float, Data type: <class \'float\'>", "c = s, My guess: str, Data type: '
                                               '<class \'str\'>", "d = word, My guess: str, Data type: <class \'str\'>", "e = True, My guess: bool, Data type: <class \'bool\'>", "f = False, My '
                                               'guess: bool, Data type: <class \'bool\'>", "g = None, My guess: None, Data type: <class \'NoneType\'>", "h = [1, 2, 3], My guess: list, Data type: '
                                               '<class \'list\'>", "i = (1, 2, 3), My guess: tuple, Data type: <class \'tuple\'>", "j = {1, 2, 3}, My guess: set, Data type: <class \'set\'>", "k = '
                                               '{\'a\': 1, \'b\': 2, \'c\': 3}, My guess: dict, Data type: <class \'dict\'>", "l = range(0, 10), My guess: range, Data type: <class \'range\'>", "m = '
                                               '[1, \'s\', True], My guess: list, Data type: <class \'list\'>"]\n',
                                       'hidden': True,
                                       'locked': False,
                                       'points': 2}],
                      'scored': True,
                      'setup': '',
                      'teardown': '',
                      'type': 'doctest'}]}
