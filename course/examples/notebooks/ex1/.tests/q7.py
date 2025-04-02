OK_FORMAT = True

test = {   'name': 'q7',
    'points': None,
    'suites': [   {   'cases': [   {   'code': '>>> def test_list_operations(out):\n'
                                               '...     output = out.splitlines()\n'
                                               "...     assert output[0] == 'list:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]'\n"
                                               "...     assert output[1] == 'list:  [0, 1, 2, 3, 5, 6, 7, 8, 9, 11]'\n"
                                               "...     assert output[2] == 'length:  10'\n"
                                               '>>> test_list_operations(out)\n',
                                       'hidden': True,
                                       'locked': False,
                                       'points': 2}],
                      'scored': True,
                      'setup': '',
                      'teardown': '',
                      'type': 'doctest'}]}
